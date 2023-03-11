#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

/**
 * Content コントラクト
 */
#[ink::contract]
mod content {

    /**
     * コントラクトで取り扱うStruct
     */
    #[ink(storage)]
    pub struct Content {
        value: bool,
    }

    /**
     * Content コントラクトで使用する関数
     */
    impl Content {
        
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Simply returns the current value of our `bool`.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
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
            assert_eq!(content.get(), false);
        }

    }
}
