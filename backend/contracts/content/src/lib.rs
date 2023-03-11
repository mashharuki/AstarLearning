#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

/**
 * Content コントラクト
 */
#[ink::contract]
mod content {

    use ink_prelude::string::String;

    /**
     * コントラクトで取り扱うStruct
     */
    #[derive(Clone)] 
    #[ink(storage)]
    pub struct Content {
        title: String,
        content: String,
        goods: u64,
        quizs: Vec<String>,
        answer: u8,
        imageurl: String
    }

    /**
     * Content コントラクトで使用する関数
     */
    impl Content {
        
        // 初期化関数
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { 
                title: Default::default(),
                content: Default::default(),
                goods: Default::default(),
                quizs: Default::default(),
                answer: Default::default(),
                imageurl: Default::default()
            }
        }

        // 初期化関数2
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        #[ink(message)]
        pub fn getGoods(&mut self) -> u64 {
            self.goods
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
