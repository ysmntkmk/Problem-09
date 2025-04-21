import Image from 'next/image'
import files from './files'

// PhotoListItem bileşeni oluşturup, files array'ini kullanarak görüntülemeye çalışın.
// 1. Verileri bir prop olarak geçirin ve her bir öğeyi PhotoListItem bileşeni içinde görüntüleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Görselin hover durumunda hafif bir büyüme efekti (scale) ve gölge ekleyin.
//    - Görsel başlığını (file.title) daha belirgin hale getirmek için font ağırlığını artırın ve rengi değiştirin.
//    - Görsel boyutunu (file.size) gri tonda daha küçük bir font ile gösterin.
// 3. Görseller arasındaki boşluğu (grid gap) artırmak için gap değerlerini düzenleyin.
// 4. files array'ine yeni bir öğe ekleyerek tasarımın doğru şekilde çalıştığını test edin.

function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
    >
      {files.map((file) => (
        <li key={file.source} className='relative'>
          <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <Image
              src={file.source}
              alt=''
              className='pointer-events-none object-cover group-hover:opacity-75'
              width={500}
              height={500}
            />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
            >
              <span className='sr-only'>
                Ayrıntıları görüntüle {file.title}
              </span>
            </button>
          </div>
          <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
            {file.title}
          </p>
          <p className='pointer-events-none block text-sm font-medium text-gray-500'>
            {file.size}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  )
}
