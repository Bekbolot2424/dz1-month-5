import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <UserCard
        name="Bekbolot"
        age={18}
        city="Bishkek"
        active={true}
        img="https://i.pinimg.com/736x/87/41/ef/8741efc1d6fd65f5de70bfe1fc0d3aae.jpg"
      />
    </div>
  );
}

export default App;
