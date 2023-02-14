#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

/**
 * nft コントラクト 
 */   
#[openbrush::contract]
pub mod nft {
    use ink_storage::traits::SpreadAllocate;
    // imports from openbrush
	use openbrush::traits::String;
	use openbrush::traits::Storage;
	use openbrush::contracts::ownable::*;
	use openbrush::contracts::psp34::extensions::mintable::*;
	use openbrush::contracts::psp34::extensions::enumerable::*;
	use openbrush::contracts::psp34::extensions::metadata::*;
	use payable_mint_pkg::{
        traits::payable_mint::*,
		impls::payable_mint::*,
    };

	use ink_lang::codegen::{
		EmitEvent,
		Env,
	};

	/**
	 * コントラクトで扱う構造体
	 */
    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct NFT {
    	#[storage_field]
		psp34: psp34::Data<Balances>,
		#[storage_field]
		ownable: ownable::Data,
		#[storage_field]
		metadata: metadata::Data,
		#[storage_field]
		payable_mint: types::Data,
    }

	// トランスファーした時のイベント
	#[ink(event)]
	pub struct Transfer {
		#[ink(topic)]
		from: Option<AccountId>,
		#[ink(topic)]
		to: Option<AccountId>,
		#[ink(topic)]
		id: Id,
	}
 
	// approveした時のイベント
	#[ink(event)]
	pub struct Approval {
		#[ink(topic)]
		from: AccountId,
		#[ink(topic)]
		to: AccountId,
		#[ink(topic)]
		id: Option<Id>,
		approved: bool,
	} 
    
    // Section contains default implementation without any modifications
	impl PSP34 for NFT {}
	impl Ownable for NFT {}
	impl PSP34Mintable for NFT {}
	impl PSP34Enumerable for NFT {}
	impl PSP34Metadata for NFT {}

	// イベントのために実装
	impl psp34::Internal for NFT {
		// トランスファーした時のもの
		fn _emit_transfer_event(&self, from: Option<AccountId>, to: Option<AccountId>, id: Id) {
			self.env().emit_event(Transfer { from, to, id });
		}

		// approveした時のもの
		fn _emit_approval_event(
			&self,
			from: AccountId,
			to: AccountId,
			id: Option<Id>,
			approved: bool,
		) {
			self.env().emit_event(Approval {
				from,
				to,
				id,
				approved,
			});
		}
	}
     
    impl NFT {
		/**
		 * new メソッド
		 */
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut _instance = Self::default();
			_instance._init_with_owner(_instance.env().caller());
			//  _instance._mint_to(_instance.env().caller(), Id::U8(1)).expect("Can mint");
			// get colleciton id
			let collection_id = _instance.collection_id();
			// set name & symbol attribute
			_instance._set_attribute(collection_id.clone(), String::from("name"), String::from("WasmNFT"));
			_instance._set_attribute(collection_id.clone(), String::from("symbol"), String::from("WTF"));
			_instance._set_attribute(collection_id, String::from("baseUri"), String::from("https://gateway.pinata.cloud/ipfs/QmdwZBwsEKNpc9uUgUzsgiGb2uYM9X1aca9Ezgz1pR79Jo"));
			_instance.payable_mint.max_supply = 100_000_000_000_000_000;
			_instance.payable_mint.last_token_id = 0;
			_instance
        }

    }

	// ---------------------------------- test ---------------------------------- 
	#[cfg(test)]
    mod tests {
        use super::*;
        use crate::nft::PSP34Error::*;
        use ink_env::test;
        use ink_lang as ink;

        const PRICE: Balance = 100_000_000_000_000_000;
		
		/**
		 * 初期化メソッド
		 */
        fn init() -> NFT {
			const BASE_URI: &str = "ipfs://myIpfsUri/";
			const MAX_SUPPLY: u64 = 10;
            NFT::new()
        }

		/**
		 * set sender method
		 */
		fn set_sender(sender: AccountId) {
            ink_env::test::set_caller::<Environment>(sender);
        }

        #[ink::test]
        fn mint_single_works() {
            let mut sh34 = init();
            let accounts = test::default_accounts::<Environment>();
			// 送信元アドレスを設定する。
            set_sender(accounts.bob);
            let num_of_mints: u64 = 1;

            assert_eq!(sh34.total_supply(), 0);

            test::set_value_transferred::<ink_env::DefaultEnvironment>(
                PRICE * num_of_mints as u128,
            );

            assert!(sh34.mint_nft().is_ok());
            assert_eq!(sh34.total_supply(), num_of_mints as u128);
            assert_eq!(sh34.balance_of(accounts.bob), 1);
            assert_eq!(sh34.owners_token_by_index(accounts.bob, 0), Ok(Id::U64(0)));
			assert_eq!(1, ink_env::test::recorded_events().count());
            assert_eq!(
                sh34.owners_token_by_index(accounts.bob, 5),
                Err(TokenNotExists)
            );
        }

		#[ink::test]
        fn mint_multiple_works() {
			let mut sh34 = init();
            let accounts = test::default_accounts::<Environment>();
			// 送信元アドレスを設定する。
            set_sender(accounts.bob);
            let num_of_mints: u64 = 2;

            assert_eq!(sh34.total_supply(), 0);

            test::set_value_transferred::<ink_env::DefaultEnvironment>(
                PRICE * num_of_mints as u128,
            );

            assert!(sh34.mint_nft().is_ok());
			assert!(sh34.mint_nft().is_ok());
            assert_eq!(sh34.total_supply(), num_of_mints as u128);
            assert_eq!(sh34.balance_of(accounts.bob), 2);
            assert_eq!(sh34.owners_token_by_index(accounts.bob, 0), Ok(Id::U64(0)));
			assert_eq!(sh34.owners_token_by_index(accounts.bob, 1), Ok(Id::U64(1)));
			assert_eq!(2, ink_env::test::recorded_events().count());
            assert_eq!(
                sh34.owners_token_by_index(accounts.bob, 5),
                Err(TokenNotExists)
            );
		}
	}
}