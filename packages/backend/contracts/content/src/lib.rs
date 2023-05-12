#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

pub use self::content::{
    ContentInfo
};

/**
 * Content コントラクト
 */
#[ink::contract]
mod content {

    use ink_prelude::string::String;
    use ink_prelude::vec::Vec;
    use scale::{
        Decode,
        Encode,
    };
    use ink_storage::{
        traits::*,
    };

    /**
     * コンテンツ情報を取り扱うStruct
     */
    #[derive(Clone, Encode, Decode, SpreadLayout, PackedLayout, SpreadAllocate, Default)]
    #[cfg_attr(
        feature = "std",
        derive(Debug, PartialEq, Eq, scale_info::TypeInfo, StorageLayout)
    )]
    pub struct ContentInfo {
        content_id: u64,
        title: String,
        intro: String,
        content: String,
        goods: u64,
        quizs: Vec<String>,
        answer: u8,
        image_url: String,
        nft_address: String,
        creator_address: String,
    }

    /**
     * コンテンツコントラクトで使用する円すう
     */
    #[ink(storage)]
    pub struct Content {
        contents: Vec<ContentInfo>,
        content_last_id: u64,
    }

    /**
     * methods of Cotent contract
     */
    impl Content {
        
        /**
         * intilize method
         */

        #[ink(constructor)]
        pub fn new() -> Self {
            let mut _instance = Self::default();
			_instance.content_last_id = 0;
            _instance
        }

        /**
         * intilize method2
         */
        #[ink(constructor)]
        pub fn default() -> Self {
            let mut _instance = Self::default();
			_instance.content_last_id = 0;
            _instance
        }

        /**
         * get selected Content
         */
        #[ink(message)]
        pub fn getContent(&mut self, id: u64) -> Option<ContentInfo> {
            // get content info
            self.contents
                .iter()
                .find(|&c| c.content_id == id)
                .cloned()
        }

        /**
         * get all Contents 
         */
        #[ink(message)]
        pub fn getContents(&mut self) -> Vec<ContentInfo> {
            // TO DO
            self.contents.clone()
        }

        /**
         * create content
         */
        #[ink(message)]
        pub fn createContent(
            &mut self,
            title: String,
            intro: String,
            content :String,
            quizs: Vec<String>,
            answer: u8,
            url: String,
            nft: String,
            creator: String
        ) {
            // create content info
            let content_info = ContentInfo {
                content_id: self.content_last_id,
                title,
                intro,
                content,
                goods: 0,
                quizs,
                answer,
                image_url: url,
                nft_address: nft,
                creator_address: creator,
            };
            // push
            self.contents.push(content_info);
            // increment
            self.content_last_id += 1;
        }

        /**
         * set image url
         */
        #[ink(message)]
        pub fn setImageUrl(&mut self, id:u64, new_url:String) -> bool {
            // update image url
            for info in self.contents.iter_mut() {
                if info.content_id == id {
                    info.image_url = new_url;
                    return true;
                }
            }
            false
        }

        /**
         * get imaget url
         */
        #[ink(message)]
        pub fn getImageUrl(&mut self, id:u64) -> Option<String> {
            // get get image url info
            self.contents
                .iter()
                .find(|&c| c.content_id == id)
                .map(|content| &content.image_url)
                .cloned()
        }

        /**
         * get intro
         */
        pub fn getIntro(&mut self, id:u64) -> Option<String> {
            // get get image url info
            self.contents
                .iter()
                .find(|&c| c.content_id == id)
                .map(|content| &content.intro)
                .cloned()
        }
    }

    /**
     * テストコード
     */
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// Imports `ink_lang` so we can use `#[ink::test]`.
        use ink_lang as ink;

        use ink_env::AccountId as AccountId32;
        use ink_env::{
            Clear,
            hash::{
                Blake2x256,
                CryptoHash,
                HashOutput,
            },
            test,
            call,
        };

        const MAX_MESSAGE_SIZE: usize = 1024;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let mut content = Content::new();
            // get content
            let contents = content.getContents();
            // check
            assert_eq!(contents.len(), 0);
        }

        #[ink::test]
        fn create_content_works() {
            // create content Contract
            let mut content = Content::new();
            // content data
            let title = String::from("test_title");
            let intro = String::from("test_intro");
            let content_text = String::from("test_content");
            let quizs = vec![String::from("quiz_1"), String::from("quiz_2")];
            let answer = 1;
            let image_url = String::from("https://example.com/image.jpg");
            let nft_address = String::from("0x1234567890123456789012345678901234567890");
            let creator_address = String::from("0x1234567890123456789012345678901234567890");

            // create content
            content.createContent(
                title.clone(), 
                intro.clone(), 
                content_text.clone(), 
                quizs.clone(), 
                answer, 
                image_url.clone(), 
                nft_address.clone(), 
                creator_address.clone()
            );

            // then
            let contents = content.getContents();
            assert_eq!(contents.len(), 1);

            let content_info = &contents[0];

            assert_eq!(content_info.title, title);
            assert_eq!(content_info.intro, intro);
            assert_eq!(content_info.content, content_text);
            assert_eq!(content_info.quizs, quizs);
            assert_eq!(content_info.answer, answer);
            assert_eq!(content_info.image_url, image_url);
            assert_eq!(content_info.nft_address, nft_address);
            assert_eq!(content_info.creator_address, creator_address);
        }

        #[ink::test]
        fn test_content() {
            // setup
            let mut content = Content::new();

            let title = String::from("test_title");
            let intro = String::from("test_intro");
            let content_text = String::from("test_content");
            let quizs = vec![String::from("quiz_1"), String::from("quiz_2")];
            let answer = 1;
            let image_url = String::from("https://example.com/image.jpg");
            let nft_address = String::from("0x1234567890123456789012345678901234567890");
            let creator_address = String::from("0x1234567890123456789012345678901234567890");
            // create content
            content.createContent(
                title.clone(), 
                intro.clone(), 
                content_text.clone(), 
                quizs.clone(), 
                answer, 
                image_url.clone(), 
                nft_address.clone(), 
                creator_address.clone()
            );

            // test getContent
            let contents = content.getContents();

            let c1 = &contents[0];
            
            assert_eq!(c1.content_id, 0);
            assert_eq!(c1.title, "test_title");
            assert_eq!(c1.intro, "test_intro");
            assert_eq!(c1.content, "test_content");
            assert_eq!(c1.quizs, quizs);
            assert_eq!(c1.answer, 1);
            assert_eq!(c1.image_url, "https://example.com/image.jpg");
            assert_eq!(c1.nft_address, "0x1234567890123456789012345678901234567890");
            assert_eq!(c1.creator_address, creator_address.clone());
            // test setImageUrl
            let is_updated = content.setImageUrl(0, "url2".into());
            assert_eq!(is_updated, true);
            let new_url = content.getImageUrl(0).unwrap();
            assert_eq!(new_url, "url2");
            // test getIntro
            let intro = content.getIntro(0).unwrap();
            assert_eq!(intro, "test_intro");
        }
    }
}
