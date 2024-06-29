import React, { useState } from "react";
import { Container, Input } from "./styles";
import Button from "@/components/Button";
import { useSearchContext } from "@/context/SearchContext";

enum KeybordKeys {
    ENTER = 'Enter',

} 

const SearchInput = () => {
  const [text, setText] = useState<string>("");
  const { setFilter } = useSearchContext() || { setFilter: () => {} };

  const handleClick = () => {
    setFilter(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (!e.target.value) {
      setFilter(e.target.value);
    }
  };

  const handleIntroKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === KeybordKeys.ENTER) {
        setFilter(text);
    }

  }

  return (
    <Container>
      <Input value={text} onChange={handleChange} onKeyDown={handleIntroKey}/>
      <Button onClick={handleClick}>Search</Button>
    </Container>
  );
};

export default SearchInput;
