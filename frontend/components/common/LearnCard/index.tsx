import Button from "../Button";
import Link from 'next/link';

// デモデータ
const products = [
    {
      id: 1,
      name: 'WASM Learning Course',
      href: '#',
      imageSrc: 'https://bafybeib5ixaris66ajoickapsv35fqqzkihaqkygukanrg3ibzcw6z65qq.ipfs.nftstorage.link/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 1,
        name: 'Astar Learning Course',
        href: '#',
        imageSrc: 'https://bafybeib5ixaris66ajoickapsv35fqqzkihaqkygukanrg3ibzcw6z65qq.ipfs.nftstorage.link/',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
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
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
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
                        Astarについて学べるコースです
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link href={{ pathname: '/learn', query: { contentFlg: 'wasm' } }}>
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