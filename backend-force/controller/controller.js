const db = require('../db')

const items =[
    {
        id: 1,
        name: "Футболка классическая",
        description: "Универсальная хлопковая футболка для повседневной носки",
        price: 1200,
        sex: "unisex",
        material: "хлопок"
    },
    {
        id: 2,
        name: "Джинсы скинни",
        description: "Узкие джинсы с высокой посадкой, подчеркивающие фигуру",
        price: 3500,
        sex: "female",
        material: "кожа"
    },
    {
        id: 3,
        name: "Кожаная куртка",
        description: "Стильная куртка из натуральной кожи с кнопками",
        price: 8900,
        sex: "male",
        material: "кожа"
    },
    {
        id: 4,
        name: "Платье-миди",
        description: "Элегантное платье до колена с цветочным принтом",
        price: 4200,
        sex: "female",
        material: "вискоза"
    },
    {
        id: 5,
        name: "Шерстяной свитер",
        description: "Теплый свитер с высоким воротником для холодной погоды",
        price: 2800,
        sex: "unisex",
        material: "шерсть"
    },
    {
        id: 6,
        name: "Спортивные шорты",
        description: "Легкие дышащие шорты для тренировок",
        price: 1500,
        sex: "male",
        material: "полиэстер"
    },
    {
        id: 7,
        name: "Юбка-карандаш",
        description: "Классическая офисная юбка приталенного кроя",
        price: 3200,
        sex: "female",
        material: "полиэстер"
    }, {
        id: 8,
        name: "Парка зимняя",
        description: "Утеплённая ветрозащитная парка с меховым капюшоном",
        price: 7500,
        sex: "unisex",
        material: "кожа"
    },
    {
        id: 9,
        name: "Кардиган oversize",
        description: "Объёмный кардиган с крупной вязкой и карманами",
        price: 2900,
        sex: "female",
        material: "шерсть"
    },
    {
        id: 10,
        name: "Костюм тройка",
        description: "Классический мужской костюм для деловых встреч",
        price: 12500,
        sex: "male",
        material: "шерсть"
    },
    {
        id: 11,
        name: "Леггинсы с принтом",
        description: "Утягивающие легинсы с модным геометрическим узором",
        price: 1800,
        sex: "female",
        material: "полиэстер"
    },
    {
        id: 12,
        name: "Рубашка в клетку",
        description: "Деревенский стиль: свободный крой и мягкий хлопок",
        price: 2300,
        sex: "male",
        material: "хлопок"
    },
    {
        id: 13,
        name: "Шорты джинсовые",
        description: "Короткие шорты из состаренного денима",
        price: 2100,
        sex: "unisex",
        material: "хлопок"
    },
    {
        id: 14,
        name: "Пальто демисезонное",
        description: "Двубортное пальто с поясом и широкими лацканами",
        price: 6800,
        sex: "female",
        material: "шерсть"
    },
    {
        id: 15,
        name: "Бомбер",
        description: "Лёгкая куртка на молнии с резинками по краям",
        price: 4100,
        sex: "male",
        material: "полиэстер"
    },
    {
        id: 16,
        name: "Комбинезон льняной",
        description: "Летний комбинезон с открытыми плечами",
        price: 3700,
        sex: "female",
        material: "хлопок"
    },
    {
        id: 17,
        name: "Жилет утеплённый",
        description: "Жилет с гусиным пухом для активного отдыха",
        price: 5400,
        sex: "unisex",
        material: "кожа"
    }
]
const basket = []
class userController{
    async getItems(req,res){
        res.send({items: items})
    }
     putInBasket(req,res){

        if (!basket.length){
            basket.push(req.body)
        }else {
            let i = 0
            for (const reqKey in basket) {
                if (basket[reqKey].id === req.body.id){
                    i+=1
                    basket[reqKey].count+=1
                }
            }
            if (i===0){
                basket.push(req.body)
            }
        }

         res.json({ success: true });
    }
    async crementBasket(req,res){
        const action = req.body.action
        const id = req.body.id
        console.log('postActive')

        for (const idKey in basket) {
            if (basket[idKey].id === id){
                if (action === '+'){
                    basket[idKey].count +=1
                }else {
                    basket[idKey].count -=1
                }
            }
        }
        res.json({ success: true });
    }
    async getBasket(req,res){
        let finalBasket
        finalBasket = basket.filter(el=> el.count>0)
        res.send(finalBasket)
    }
}
module.exports = new userController()