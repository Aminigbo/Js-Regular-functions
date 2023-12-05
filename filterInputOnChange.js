const handleInputChange = (text) => {
        const filteredSuggestions = Cooks.filter(
            state => state.vendorName.toLowerCase().startsWith(text.toLowerCase())
        );
        
        // setSearch(text); // save typed characters to state
        // setSuggestions(filteredSuggestions); // save filtered data to state
    };
