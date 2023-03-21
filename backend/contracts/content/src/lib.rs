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
        contentId: u64,
        title: String,
        content: String,
        goods: u64,
        quizs: Vec<String>,
        answer: u8,
        imageurl: String,
    }

    /**
     * コンテンツを配列にしてまとめるStruct
     */
    #[ink(storage)]
    pub struct Content {
        contents: Vec<ContentInfo>,
    }

    /**
     * Content コントラクトで使用する関数
     */
    impl Content {
        
        // 初期化関数
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::new()
        }

        // 初期化関数2
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new()
        }

        #[ink(message)]
        pub fn getContents(&mut self) -> Vec<ContentInfo> {
            self.contents.clone()
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
