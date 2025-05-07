import Game from "./components/demoUse/Game";
import Counter from "./components/demoUse/Counter";
import SharedCounter from "./components/demoUse/SharedCounter";
import Product from "./components/demoUse/Product";

function App() {
  return (
    <>
      <div className="app">
        <div className="flex">
          <h1>井字棋</h1>
          <Game></Game>
        </div>

        <div className="flex">
          <h1>计数器</h1>
          <Counter></Counter>
        </div>

        <div className="flex">
          <h1>共享计数器</h1>
          <SharedCounter></SharedCounter>
        </div>

        <div className="flex">
          <h1>商品查询</h1>
          <Product></Product>
        </div>
      </div>
    </>
  );
}

export default App;
