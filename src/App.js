import React from "react";
import BooksCard from "./components/BooksCard";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Typography, createMuiTheme } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

class App extends React.Component {
  state = {
    booksData: [],
  };

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appzJZWzMWidJ0KHo/Calendar?api_key=keyhNLoNKlEko9vny"
    )
      .then((res) => res.json())
      .then((res) => {
        const sortedRecords = res.records.sort((a, b) => a.fields.Date.localeCompare(b.fields.Date));
        this.setState({ booksData: sortedRecords });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { booksData } = this.state;
    return (
      <>
        <Navbar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Typography style={{ marginTop: 125 }}>
            <Grid container direction="row" spacing={2}>
              {booksData.map((book) => (
                <BooksCard {...book.fields} key={book.fields.id} />
              ))}
            </Grid>
          </Typography>
        </ThemeProvider>
        <Footer />
      </>
    );
  }
}

export default App;
