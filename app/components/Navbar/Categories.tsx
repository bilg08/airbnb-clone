import React from 'react'
import Container from '../Container'
import {TbBeach} from 'react-icons/tb';
import {GiWindmill} from 'react-icons/gi';
import {MdOutlineVilla} from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';


export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is close to the Windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is close to the Modern',
    }
]

function Categories() {
    const params = useSearchParams();
    const category = params?.get('category');
    const path = usePathname();
    const isMainPage = path === '/';
    if(!isMainPage) return null;
  return (
    <Container>
        <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {categories.map((item) => (
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    description={item.description}
                    icon={item.icon}
                />
            ))}
        </div>
    </Container>
  )
}

export default Categories