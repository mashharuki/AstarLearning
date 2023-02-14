#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

use ink_lang as ink;

/**
 * nft Contract
 */
#[openbrush::contract]
mod nft {
    use openbrush::contracts::psp34::extensions::metadata::*;
    use openbrush::contracts::psp34::extensions::burnable::*;
    use openbrush::contracts::psp34::extensions::enumerable::*;
    use openbrush::contracts::psp34::*;
    use ink_prelude::string::String;
    use ink_prelude::vec::Vec;
    use ink_storage::Mapping;
    use ink_storage::traits::SpreadAllocate;

	/**
	 * NFTコントラクトで保有するストレージ
	 */
    #[ink(storage)]
    #[derive(Default, SpreadAllocate, PSP34Storage, PSP34MetadataStorage)]
    pub struct NFT {
        #[PSP34StorageField]
        psp34: PSP34Data<EnumerableBalances>,
        last_token_id: u8,
        cid_list: Mapping<String, Vec<String>>,
        #[PSP34MetadataStorageField]
        metadata: PSP34MetadataData,
    }

	// 各メソッドを継承
    impl PSP34 for NFT {}
    impl PSP34Metadata for NFT {}
    // Optionally you can add more default implementations
    impl PSP34Internal for NFT {}
    impl PSP34MetadataInternal for NFT {}
    impl PSP34Burnable for NFT {}
    impl PSP34Enumerable for NFT {}

	/**
	 * NFTコントラクトのメソッド
	 */
    impl NFT {
		/**
		 * new メソッド
		 * param id NFT ID
		 * param name NFT Name
		 * param symbol NFT Symbol
		 */
        #[ink(constructor)]
        pub fn new(id: Id, name: String, symbol: String) -> Self {
			// コントラクトの初期化
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {
				// 属性情報をそれぞれセットする。
                instance._set_attribute(id.clone(), String::from("name").into_bytes(), name.into_bytes());
                instance._set_attribute(id, String::from("symbol").into_bytes(), symbol.into_bytes());
            })
        }

		/**
		 * mint_tokenメソッド
		 * 呼び出し元のアドレスにミントする。
		 */
        #[ink(message)]
        pub fn mint_token(&mut self) -> Result<(), PSP34Error> {
			// NFTをミント
            self._mint_to(Self::env().caller(), Id::U8(self.last_token_id))?;
			// インクリメント
            self.last_token_id += 1;
            Ok(())
        }

		/**
		 * 情報を追加してミントするメソッド
		 * 呼び出し元のアドレスにミントするメソッド
		 * param title コンテンツのタイトル
		 * param author 製作者
		 * param date 発行日時
		 * param cid コンテンツのCID情報
		 */
        #[ink(message)]
        pub fn mint_with_attribute(&mut self, title: String, author: String, date: String, cid: String) -> Result<(), PSP34Error> {
            self._mint_to(Self::env().caller(), Id::U8(self.last_token_id))?;
            self.last_token_id += 1;
			// 属性情報用の配列を作成
            let mut attributes = Vec::new();
			// それぞれ情報を格納する。
            attributes.push(title);
            attributes.push(author);
            attributes.push(date);
			// cidと属性を紐づけて登録する。
            self.cid_list.insert(cid, &attributes);
            Ok(())
        }

    }

	// --------------------  TEST Code  --------------------

	/**
     * 静的テストコード
     */
    #[cfg(test)]
    mod tests {
		use super::*;
        use ink_lang as ink;
		use ink_prelude::string::String as PreludeString;
		use openbrush::contracts::psp34::Id::U8;
		use openbrush::contracts::psp34::extensions::metadata::*;
    	use openbrush::contracts::psp34::extensions::burnable::*;
    	use openbrush::contracts::psp34::extensions::enumerable::*;
    	use openbrush::contracts::psp34::*;

		// NFTの名前とシンボル
		// let name: String = String::from("TEST");
		// let symbol: String = String::from("TST");

		/**
		 * デフォルト値確認用のテストコード
		 */
		fn default_works_test() {
			// NFT コントラクト作成
			//let mut nft = NFT::new(NFT_ID, name, symbol);
			let nft = NFT::default();
		}

		/**
		 * NFTミントのテストコード
		 */
		fn nft_mint_test(){
			let mut nft = NFT::default();
			nft.mint_token();
		}
	}
}