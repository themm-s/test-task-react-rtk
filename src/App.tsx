import { Todo } from "./components/Todo/Todo";
import { MainContainer } from "./ui/Main/MainContainer";

export const App = () => {
  return (
    <MainContainer>
      <Todo />
    </MainContainer>
  );
};