# WASM コントラクト開発メモ

## 新規にコントラクトを追加する場合

`contracts`フォルダ配下にて下記コマンドを作成

```bash
cargo contract new myContract
```

### nightly でビルドする方法

```bash
cargo +nightly contract build
```

## 独自の型を定義するとき

```rs
/// A custom type that we can use in our contract storage
#[derive(scale::Decode, scale::Encode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct Inner {
    value: bool,
}

#[ink(storage)]
pub struct ContractStorage {
    inner: Inner,
}
```
