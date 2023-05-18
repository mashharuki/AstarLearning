#![cfg_attr(not(feature = "std"), no_std)]

pub use self::content::{
    ContentInfo
};

/**
 * Content コントラクト
 */
#[ink::contract]
mod content {

    use ink::storage::{
        Mapping,
    };
    
    use ink::prelude::string::String;
    use ink::prelude::vec::Vec;
    use ink::prelude::string::ToString;
    use ink::prelude::vec;
    
    /**
     * コンテンツ情報を取り扱うStruct
     */
    #[derive(Clone, Default, scale::Encode, scale::Decode)]
    #[cfg_attr(
        feature = "std",
        derive(Debug, PartialEq, Eq, scale_info::TypeInfo, ink::storage::traits::StorageLayout)
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

    #[ink(storage)]
    #[derive(Default)]
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
                nft_address: "a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d".to_string(),
                creator_address: "5DwLfNQqkLpDoKkHqZCC4EMcFjkn2sbEzqF3JVCZHx6zHoqq".to_string(),
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
                nft_address: "a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d".to_string(),
                creator_address: "5DwLfNQqkLpDoKkHqZCC4EMcFjkn2sbEzqF3JVCZHx6zHoqq".to_string(),
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
        pub fn getContent(&mut self, id: u64) -> ContentInfo {
            // get content info
            self.contents.get(&id).clone().unwrap()
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
                if let Some(content) = self.contents.get(&id) {
                    contents_info.push(content);
                }
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
        ) -> Result<(), ()> {
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

            // increment
            self.content_last_id += 1;
            // push
            self.contents.insert(self.content_last_id, &content_info);

            Ok(())
        }

        /**
         * set image url
         */
        #[ink(message)]
        pub fn setImageUrl(&mut self, id:u64, new_url:String) -> Result<(), ()> {
            // get current content info
            let mut new_content = self.contents.get(&id).unwrap();
            // update image url
            new_content.image_url = new_url;
            self.contents.insert(&id, &new_content);

            Ok(())
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
     * Test Code
     */
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;
        use ink::env::debug_println;

        const MAX_MESSAGE_SIZE: usize = 1024;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let content = Content::new();

            debug_println!(
                "content: {:?}",
                content
            );
        }

        #[ink::test]
        fn get_contents() {
            let mut content = Content::new();
            let contents = content.getContents();
            assert_eq!(contents.len(), 1);
        }

        #[ink::test]
        fn get_imageUrl() {
            let mut content = Content::new();
            let url:String = content.getImageUrl(0);
            assert_eq!(url, "https://example.com/sample_image.png".to_string());
        }

        #[ink::test]
        fn get_imageIntro() {
            let mut content = Content::new();
            let intro:String = content.getIntro(0);
            assert_eq!(intro, "Sample introduction".to_string());
        }

        #[ink::test]
        fn test_create_content() {
            let mut my_content = Content::new();

            let title = "Sample title".to_owned();
            let intro = "Sample intro".to_owned();
            let content = "Sample content".to_owned();
            let quizs = vec![
                "What is 1+1?".to_owned(),
                "What is the capital of Japan?".to_owned(),
            ];
            let answer = 0;
            let url = "https://example.com/sample.png".to_owned();
            let nft = "0x1234567890abcdef".to_owned();
            let creator = "0x0987654321fedcba".to_owned();
            // create new content
            my_content.createContent(
                title.clone(),
                intro.clone(),
                content.clone(),
                quizs.clone(),
                answer,
                url.clone(),
                nft.clone(),
                creator.clone(),
            );
            // content data
            let content_info = ContentInfo {
                content_id: 0,
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
            
            assert_eq!(my_content.contents.get(&0), Some(content_info));
        }
    }
}