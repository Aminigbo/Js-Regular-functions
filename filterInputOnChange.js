// ======= Search the array for words starting with the typed character
const handleInputChange = (text) => {
        const filteredSuggestions = Cooks.filter(
            state => state.vendorName.toLowerCase().startsWith(text.toLowerCase())
        );
        
        // setSearch(text); // save typed characters to state
        // setSuggestions(filteredSuggestions); // save filtered data to state
    };


// =======search the array for words that contain the typed character
  const filteredSuggestionsByAllCharacter = NigerianStates.filter(
      state =>
        state.name.toLowerCase().includes(text.toLowerCase()) ||
        state.capital.toLowerCase().includes(text.toLowerCase())
    );
    // setSearch(text); // save typed characters to state
        // setSuggestions(filteredSuggestions); // save filtered data to state
  };
