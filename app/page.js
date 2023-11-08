import Image from 'next/image';
import { groupBy } from 'lodash'
async function getData() {
  const res = await fetch('https://api.sheety.co/b6dbcc47ec9ab905fd53f75df4e9a1c0/turkeyRedMenu/specials', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const data = await getData()
  const categories = data.specials.map((item) => item.category).filter((value, index, self) => self.indexOf(value) === index);
  return (
  <div className='mx-auto w-full'>
    <div className=" pb-16 text-center w-full before:bg-blend-multiply before:contents-[''] before:absolute before:left-0 before:w-[100rem] before:h-[300px] before:z-[-1] before:bg-[#881b1d]/90">
      <div className="pt-10 flex justify-evenly">
        <div className="pb-16 w-1/6 text-center">
          <Image className='mix-blend-multiply' src="/images/TurkeyRed.svg" alt='' width={200} height={200}/>
        </div>
        <div className='pb-10 pl-6 z-10 self-center w-2/3 text-start'>
          <h2 className='text-[#ECE7DB] text-7xl'>Today's Specials</h2>
        </div>
      </div>
    </div>
    <div className='mx-auto w-full ml-[25%]'>
      {categories.map((itemCategory) => {
        return ( 
            <div className='pt-8 pb-8 text-white flex flex-col text-start text-lg relative'>
              <div className='absolute left-[-14rem] top-8 text-3xl font-thin'>
                  <h3>{itemCategory}</h3>
              </div>
          {groupBy(data.specials,"category")[itemCategory.toString()].map((menuItem, index) => {
         return (
        <div 
            className='pb-5'
            key={index}>
            <p className='text-4xl font-extrabold'>{menuItem.item}<span className=' text-[#881b18] font-bold pl-1 text-2xl'> {menuItem.price1}</span>{menuItem.price2 && <span className=' text-[#881b18] font-bold pl-1 text-2xl'>| {menuItem.price2}</span>}</p>
            {menuItem.description &&
              <p className='text-2xl italic mt-[-8px] max-w-[60%] pt-4 pl-1'>{menuItem.description}</p>
            }
        </div>
    )
        })}
        </div>
      )
      })
      }
    </div>
    
  </div>   
  )
}



