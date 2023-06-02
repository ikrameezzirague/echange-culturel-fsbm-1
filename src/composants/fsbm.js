import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const labels = [
  {
    id: 1,
    label: 'Nombre des étudiants',
    value: 11005,
  },
  {
    id: 2,
    label: 'Nombre des professeurs',
    value: 272,
  },
  {
    id: 3,
    label: 'Nombre des filières licence',
    value: 6,
  },
  {
    id: 4,
    label: 'Nombre des filières masters',
    value: 17,
  },
  {
    id: 5,
    label: 'Nombre des filières licence professionnelle',
    value: 2,
  },
  {
    id: 6,
    label: 'Nombre de laboratoires de recherche',
    value: 16,
  },
  {
    id: 7,
    label: 'Nombre des lauréats',
    value: 'xxxxx',
  },
];

const BarChartWithText = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={labels}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartWithText;
