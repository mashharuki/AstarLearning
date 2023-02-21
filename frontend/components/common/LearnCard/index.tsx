import Button from "../Button";
import Link from 'next/link';

// 学習コンテンツ表示用のデータ
const products = [
    {
      id: 1,
      name: 'WASM Learning Course',
      href: '#',
      imageSrc: '/WasmContent.jpeg',
      description: 'WASMについて学べるコースです。',
      contentFlg: 'wasm'
    },
    {
        id: 2,
        name: 'Astar Learning Course',
        href: '#',
        imageSrc: '/AstarContent.jpeg',
        description: 'Astar Networkについて学べるコースです',
        contentFlg: 'astar'
    },
    {
      id: 3,
      name: 'Shiden Learning Course',
      href: '#',
      imageSrc: '/ShidenContent.jpeg',
      description: 'Shiden Networkについて学べるコースです',
      contentFlg: 'shiden'
  },
]

/**
 * Card Component
 * 引数には、獲得したNFTのメタデータを配列にして格納する予定
 * @returns 
 */
export default function Card() {
    return (
      <div className="border-[#d8d2c5] dark:border-[#323943] bg-[#f4efe2] dark:bg-[#121923]">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-50">
                  <img
                    src={product.imageSrc}
                    alt=''
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-left text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="ml-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link href={{ pathname: '/learn', query: { contentFlg: `${product.contentFlg}` } }}>
                    <Button name="Learn More →" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}