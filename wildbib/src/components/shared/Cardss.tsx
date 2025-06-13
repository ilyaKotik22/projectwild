import React from "react";

export async function getServerSideProps(context: any) {
    try {
        const response = await fetch('http://localhost:5000/api/items');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        return {
            props: {
                initialUserData: data.items, // Убедитесь, что data содержит свойство items
            },
        };
    } catch (error) {
        console.error('Ошибка:', error);
        return {
            props: {
                initialUserData: [], // Возвращаем пустой массив в случае ошибки
            },
        };
    }
}

interface Props{
    ClassName?: string
    initialUserData?: any[]

}

export const Cardss: React.FC<Props> = ({ ClassName,initialUserData }) => {
    return (
        <div className={ ClassName}>
            {initialUserData?.map((el:any)=>{
                return(
                    <div>
                        {el.name}
                    </div>
                )
            })}
        </div>);
};