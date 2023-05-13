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
        Mapping,
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
     * Struct of Content
     */
    #[ink(storage)]
    pub struct Content {
        contents: Mapping<u64, ContentInfo>,
        content_last_id: u64
    }

    /**
     * methods of Cotent contract
     */
    impl Content {
        
        /**
         * intilize method
         */
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            let first_id: u64 = 0;
            let first_content: ContentInfo = ContentInfo {
                content_id: first_id,
                title: "Sample title".to_string(),
                intro: "Sample introduction".to_string(),
                content: "Sample content".to_string(),
                goods: 0,
                quizs: vec![
                    "Sample question 1".to_string(),
                    "Sample question 2".to_string(),
                    "Sample question 3".to_string(),
                ],
                answer: 1,
                image_url: "https://example.com/sample_image.png".to_string(),
                nft_address: "0x1234567890123456789012345678901234567890".to_string(),
                creator_address: "0x1234567890123456789012345678901234567890".to_string(),
            };

            // init data
            let mut contents = Mapping::default();
            contents.insert(first_id, &first_content);

            Self {
                contents,
                content_last_id: first_id,
            }
        }

        /**
         * intilize method2
         */
        #[ink(constructor, payable)]
        pub fn default() -> Self {
            let first_id: u64 = 0;
            let first_content: ContentInfo = ContentInfo {
                content_id: first_id,
                title: "Sample title".to_string(),
                intro: "Sample introduction".to_string(),
                content: "Sample content".to_string(),
                goods: 0,
                quizs: vec![
                    "Sample question 1".to_string(),
                    "Sample question 2".to_string(),
                    "Sample question 3".to_string(),
                ],
                answer: 1,
                image_url: "https://example.com/sample_image.png".to_string(),
                nft_address: "0x1234567890123456789012345678901234567890".to_string(),
                creator_address: "0x1234567890123456789012345678901234567890".to_string(),
            };

            // init data
            let mut contents = Mapping::default();
            contents.insert(first_id, &first_content);

            Self {
                contents,
                content_last_id: first_id,
            }
        }

        /**
         * get selected Content
         */
        #[ink(message)]
        pub fn getContent(&mut self, id: u64) -> Option<ContentInfo> {
            // get content info
            self.contents.get(&id)
        }

        /**
         * get all Contents 
         */
        #[ink(message)]
        pub fn getContents(&mut self) -> Vec<ContentInfo> {
            let mut contents_info: Vec<ContentInfo> = Vec::new();
            let current_last_id = self.content_last_id;

            // get all content data
            for id in 0..=current_last_id {
                let content = self.contents.get(&id).unwrap().clone();
                contents_info.push(content);
            } 
             
            contents_info
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
            self.contents.insert(self.content_last_id, &content_info);
            // increment
            self.content_last_id += 1;
        }

        /**
         * set image url
         */
        #[ink(message)]
        pub fn setImageUrl(&mut self, id:u64, new_url:String){
            // update image url
            let mut content = self.contents.get(&id).unwrap();
            content.image_url = new_url;
            
        }

        /**
         * get imaget url
         */
        #[ink(message)]
        pub fn getImageUrl(&mut self, id:u64) -> String {
            // get get image url info
            let content = self.contents.get(&id).unwrap();
            content.image_url.clone()
        }

        /**
         * get intro
         */
        #[ink(message)]
        pub fn getIntro(&mut self, id:u64) -> String {
            // get get intro info
            let content = self.contents.get(&id).unwrap();
            content.intro.clone()
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
            let content = Content::new();
        }

    }
}
