import { Header, Form, Button, Label, Input } from './Searchbar.styled';
import { ReactComponent as Logo } from './search.svg';

const Searchbar = () => {
  return (
    <Header>
      <Form>
        <Button type="submit">
          <Label />
          <Logo />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
