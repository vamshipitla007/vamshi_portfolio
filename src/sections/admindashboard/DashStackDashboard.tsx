import {
    Area,
    AreaChart,
    CartesianGrid,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const revenueData = [
    { name: '5k', sales: 20, profit: 20 },
    { name: '10k', sales: 34, profit: 70 },
    { name: '15k', sales: 28, profit: 45 },
    { name: '20k', sales: 28, profit: 35 },
    { name: '25k', sales: 55, profit: 50 },
    { name: '30k', sales: 35, profit: 48 },
    { name: '35k', sales: 90, profit: 26 },
    { name: '40k', sales: 40, profit: 58 },
    { name: '45k', sales: 66, profit: 30 },
    { name: '50k', sales: 35, profit: 32 },
    { name: '55k', sales: 58, profit: 90 },
    { name: '60k', sales: 20, profit: 20 },
];

const analyticsData = [
    { year: '2015', blue: 25, green: 0 },
    { year: '2016', blue: 70, green: 58 },
    { year: '2017', blue: 45, green: 25 },
    { year: '2018', blue: 50, green: 25 },
    { year: '2019', blue: 98, green: 92 },
];

const customerData = [
    { name: 'Customers', value: 85 },
    { name: 'Empty', value: 15 },
];

function DashStackDashboard() {
    return (
        <div className='w-full'>
            {/* Header */}
            <div className='mb-8'>
                <h1 className='text-[24px] font-bold text-[#202224]'>
                    Dashboard
                </h1>
            </div>

            {/* Revenue Chart */}
            <div className='bg-white rounded-[30px] p-6 lg:p-8 shadow-sm'>
                <div className='flex items-center justify-between mb-8'>
                    <h2 className='text-[16px] font-bold text-[#202224]'>
                        Revenue
                    </h2>

                    <button className='w-[110px] h-[24px] rounded-xl border border-[#E7E7E7] text-[#7B7B7B] text-sm font-medium'>
                        October
                    </button>
                </div>

                <div className='w-full h-[300px]'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart data={revenueData}>
                            <defs>
                                <linearGradient
                                    id='salesGradient'
                                    x1='0'
                                    y1='0'
                                    x2='0'
                                    y2='1'
                                >
                                    <stop
                                        offset='5%'
                                        stopColor='#FF8F6DCC'
                                        stopOpacity={0.9}
                                    />
                                    <stop
                                        offset='95%'
                                        stopColor='#FF8F6DCC'
                                        stopOpacity={0.4}
                                    />
                                </linearGradient>

                                <linearGradient
                                    id='profitGradient'
                                    x1='0'
                                    y1='0'
                                    x2='0'
                                    y2='1'
                                >
                                    <stop
                                        offset='5%'
                                        stopColor='#DBA5FF'
                                        stopOpacity={0.9}
                                    />
                                    <stop
                                        offset='95%'
                                        stopColor='#DBA5FF'
                                        stopOpacity={0.3}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray='0'
                                vertical={false}
                                stroke='#F1F1F1'
                            />

                            <XAxis
                                dataKey='name'
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: '#A3A3A3',
                                    fontSize: 13,
                                }}
                            />

                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: '#A3A3A3',
                                    fontSize: 13,
                                }}
                            />

                            <Tooltip />

                            <Area
                                type='monotone'
                                dataKey='profit'
                                stroke='#DBA5FF'
                                fill='url(#profitGradient)'
                                strokeWidth={0}
                            />

                            <Area
                                type='monotone'
                                dataKey='sales'
                                stroke='#FF8F6DCC'
                                fill='url(#salesGradient)'
                                strokeWidth={0}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Legends */}
                <div className='flex items-center justify-center gap-12 mt-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 rounded-full bg-[#FF8F6DCC]' />

                        <span className='text-[12px] font-semibold text-[#202224]'>
                            Sales
                        </span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 rounded-full bg-[#DBA5FF]' />

                        <span className='text-[12px] font-semibold text-[#202224]'>
                            Profit
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Cards */}
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8'>
                {/* Customers */}
                <div className='bg-white rounded-[30px] p-6 shadow-sm'>
                    <h2 className='text-[22px] font-bold text-[#202224]'>
                        Customers
                    </h2>

                    <div className='w-full h-[230px] mt-4'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <PieChart>
                                <Pie
                                    data={customerData}
                                    dataKey='value'
                                    innerRadius={70}
                                    outerRadius={85}
                                    startAngle={90}
                                    endAngle={-270}
                                    paddingAngle={8}
                                    cornerRadius={12}
                                    stroke='none'
                                    fill='#4880FF'
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <div>
                            <h3 className='text-[24px] font-bold text-[#202224]'>
                                34,249
                            </h3>

                            <div className='flex items-center gap-2 mt-2'>
                                <div className='w-3 h-3 rounded-full bg-[#4880FF]' />

                                <span className='text-[#606060] text-[18px]'>
                                    New Customers
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-[24px] font-bold text-[#202224]'>
                                1420
                            </h3>

                            <div className='flex items-center gap-2 mt-2'>
                                <div className='w-3 h-3 rounded-full bg-[#C7D3F9]' />

                                <span className='text-[#606060] text-[18px]'>
                                    Repeated
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Product */}
                <div className='bg-white rounded-[30px] p-6 shadow-sm flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[22px] font-bold text-[#202224]'>
                            Featured Product
                        </h2>

                        
                    </div>

                    <div className='flex-1 flex items-center justify-center'>
                        <img
                            src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
                            alt='headphone'
                            className='w-[220px] h-[220px] object-cover rounded-3xl'
                        />
                    </div>

                    <div className='text-center pb-3'>
                        <h3 className='text-[18px] font-bold text-[#202224]'>
                            Beats Headphone 2019
                        </h3>

                        <p className='text-[#4880FF] text-[12px] font-semibold mt-2'>
                            $89.00
                        </p>
                    </div>
                </div>

                {/* Sales Analytics */}
                <div className='bg-white rounded-[30px] p-6 shadow-sm'>
                    <h2 className='text-[22px] font-bold text-[#202224] mb-8'>
                        Sales Analytics
                    </h2>

                    <div className='w-full h-[320px] '>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart data={analyticsData}>
                                <CartesianGrid
                                    vertical={false}
                                    stroke='#F1F1F1'
                                />

                                <XAxis
                                    dataKey='year'
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: '#A3A3A3',
                                        fontSize: 13,
                                    }}
                                />

                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: '#A3A3A3',
                                        fontSize: 13,
                                    }}
                                />

                                <Tooltip />

                                <Line
                                    type='monotone'
                                    dataKey='blue'
                                    stroke='#4880FF'
                                    strokeWidth={4}
                                    dot={{
                                        r: 5,
                                        fill: '#4880FF',
                                    }}
                                />

                                <Line
                                    type='monotone'
                                    dataKey='green'
                                    stroke='#00B69B'
                                    strokeWidth={4}
                                    dot={{
                                        r: 5,
                                        fill: '#00B69B',
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashStackDashboard;