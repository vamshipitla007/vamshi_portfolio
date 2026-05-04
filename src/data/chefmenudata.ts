import Item1 from "@/assets/chefrestaurant/item1.png";
import Item2 from "@/assets/chefrestaurant/item2.png";
import Item3 from "@/assets/chefrestaurant/item3.png";
import Item4 from "@/assets/chefrestaurant/item4.png";
import CashbackIcon from "@/assets/icons/cashback.svg";
import WeightIcon from "@/assets/icons/weightloss.svg";
import PaymentIcon from "@/assets/icons/payment.svg";
import RatesIcon from "@/assets/icons/rates.svg";
import StorageIcon from "@/assets/icons/storage.svg";
import ProductsIcon from "@/assets/icons/products.svg";


export type MealType = "breakfast" | "lunch" | "snack" | "dinner";

export interface Meal {
    id: number;
    title: string;
    description: string;
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
    weight: number;
    image: string;
    type: MealType;
}

export interface DayMenu {
    day: string;
    meals: Meal[];
}

export interface MenuPlan {
    category: string;
    kcal: number;
    week: number;
    days: DayMenu[];
}

type FAQ = {
    question: string;
    answer: string;
};

type Category = {
    key: string;
    label: string;
    icon: string;
    faqs: FAQ[];
};

export const faqData: Category[] = [
    {
        key: "cashback",
        label: "Cashback",
        icon: CashbackIcon,
        faqs: [
            {
                question: "What is cashback?",
                answer: "",
            },
            {
                question: "How to get cashback?",
                answer:
                    "Make orders, take part in promotions, recommend us to friends or connect a family tariff. We will refund up to 50% of the order value.",
            },
            {
                question: "Why can I only spend part of the cashback?",
                answer:
                    "Cashback is partially restricted to maintain balance between rewards and service sustainability.",
            },
            {
                question: "Where can I see my bonus balance?",
                answer:
                    "You can check your bonus balance in your account dashboard.",
            },
        ],
    },

    {
        key: "weight",
        label: "Weight loss",
        icon: WeightIcon,
        faqs: [
            {
                question: "How does weight loss plan work?",
                answer: "We calculate your calorie intake and deliver balanced meals.",
            },
        ],
    },
    {
        key: "payment",
        label: "Payment",
        icon: PaymentIcon,
        faqs: [
            {
                question: "What payment methods do you accept?",
                answer: "We accept credit cards, PayPal, and bank transfers.",
            },
        ],
    },
    {
        key: "rates",
        label: "Rates & Delivery",
        icon: RatesIcon,
        faqs: [
            {
                question: "What are your delivery rates?",
                answer: "Delivery rates vary based on location and order size.",
            },
        ],
    },
    {
        key: "storage",
        label: "Storage",
        icon: StorageIcon,
        faqs: [
            {
                question: "How should I store the meals?",
                answer: "Store meals in the refrigerator and consume within 3 days.",
            },
        ],
    },
    {
        key: "products",
        label: "Products",
        icon: ProductsIcon,
        faqs: [
            {
                question: "What ingredients do you use?",
                answer: "We use fresh, high-quality ingredients sourced from local farms.",
            },
        ],
    }
];

export const menuData: MenuPlan[] = [
    {
        category: "power",
        kcal: 1800,
        week: 1,
        days: [
            {
                day: "Monday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
            {
                day: "Tuesday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
            {
                day: "Wednesday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
            {
                day: "Thursday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
            {
                day: "Friday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
        ],
    },
    {
        category: "Slim",
        kcal: 1500,
        week: 1,
        days: [
            {
                day: "Monday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
        ],
    },
    {
        category: "Balance",
        kcal: 1300,
        week: 1,
        days: [
            {
                day: "Monday",
                meals: [
                    {
                        id: 1,
                        title: "BREAKFAST 1",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "breakfast",
                    },
                    {
                        id: 2,
                        title: "BREAKFAST 2",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item2,
                        type: "breakfast",
                    },
                    {
                        id: 3,
                        title: "LUNCH",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item3,
                        type: "lunch",
                    },
                    {
                        id: 4,
                        title: "SNACK",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item4,
                        type: "snack",
                    },
                    {
                        id: 5,
                        title: "DINNER",
                        description: "Chicken fricassee with mushrooms and bulgur",
                        protein: 15,
                        fat: 7,
                        carbs: 24,
                        calories: 285,
                        weight: 345,
                        image: Item1,
                        type: "dinner",
                    },
                ],
            },
        ],
    },
    {
        category: "power",
        kcal: 1800,
        week: 1,
        days: []
    },
    {
        category: "Slim",
        kcal: 1500,
        week: 1,
        days: []
    },
    {
        category: "Balance",
        kcal: 1300,
        week: 1,
        days: []
    },
];