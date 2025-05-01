// WeeklyActivityChart.tsx
import React from 'react';
import { Column } from '@ant-design/charts';

interface DataType {
    day: string;
    type: 'Deposit' | 'Withdraw';
    value: number;
}

const WeeklyActivityChart: React.FC = () => {
    const data: DataType[] = [
        { day: 'Sat', type: 'Deposit', value: 250 },
        { day: 'Sat', type: 'Withdraw', value: 480 },
        { day: 'Sun', type: 'Deposit', value: 120 },
        { day: 'Sun', type: 'Withdraw', value: 340 },
        { day: 'Mon', type: 'Deposit', value: 270 },
        { day: 'Mon', type: 'Withdraw', value: 320 },
        { day: 'Tue', type: 'Deposit', value: 370 },
        { day: 'Tue', type: 'Withdraw', value: 470 },
        { day: 'Wed', type: 'Deposit', value: 230 },
        { day: 'Wed', type: 'Withdraw', value: 140 },
        { day: 'Thu', type: 'Deposit', value: 240 },
        { day: 'Thu', type: 'Withdraw', value: 380 },
        { day: 'Fri', type: 'Deposit', value: 330 },
        { day: 'Fri', type: 'Withdraw', value: 390 },
    ];

    const config = {
        data,
        isGroup: true,
        xField: 'day',
        yField: 'value',
        seriesField: 'type',
        // autoFit: true,
        columnStyle: {
            radius: [10, 10, 0, 0],
        },
        color: ['#16DBCC', '#FF82AC'],
        label: false,
    };

    return (
        <div style={{ background: '#ffffff', padding: 24, borderRadius: 25, width: 730}}>
            <Column {...config} />
        </div>
    );
};

export default WeeklyActivityChart;
