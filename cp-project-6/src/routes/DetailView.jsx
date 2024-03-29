import CoinDetail from "../Components/coinDetail";

const DetailView = () => {
  return (
    <div>
      <CoinDetail />
      <LineChart width={500} height={300} data={coinData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default DetailView;
