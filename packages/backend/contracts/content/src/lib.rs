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
        content: String,
        goods: u64,
        quizs: Vec<String>,
        answer: u8,
        image_url: String,
        nft_address: String,
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
        pub fn getContent(&mut self, id: u64) {
            // TO DO
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
            content :String,
            quizs: Vec<String>,
            answer: u8,
            imageUrl: String,
            nftAddress: String,
            creator: String
        ) {
            // TO DO
        }

        /**
         * set image url
         */
        #[ink(message)]
        pub fn setImageUrl(&mut self, id:String, url:String) {
            // TO DO
        }

        /**
         * get imaget url
         */
        #[ink(message)]
        pub fn getImageUrl(&mut self, id:String) {
            // TO DO
        }

        /**
         * get intro
         */
        pub fn getIntro(&mut self, id:String) {
            // TO DO
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

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let content = Content::default();
        }

    }
}
