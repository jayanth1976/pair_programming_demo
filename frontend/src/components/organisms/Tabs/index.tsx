import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { getBooks } from "../../../services";
import { IBookDetails } from "../SubmitBookForm";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const [allBooks, setAllBooks] = useState<IBookDetails[]>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    getBooks().then((res) => setAllBooks([...res]));
  }, []);

  const filterBooksByGenre = (genre: String) => {
    const ans = allBooks.filter((item: IBookDetails) => {
      return item.genre === genre;
    });
    return ans;
  };

  const academicBooks = filterBooksByGenre("Academic");
  const spiritualBooks = filterBooksByGenre("Spiritual");
  const comedyBooks = filterBooksByGenre("Comedy");
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Academic" value="1" />
            <Tab label="Spiritual" value="2" />
            <Tab label="Comedy" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            {academicBooks.map((item) => (
              <li key={item.id}>{item.bookName}</li>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="2">
          {spiritualBooks.map((item) => (
            <li key={item.id}>{item.bookName}</li>
          ))}
        </TabPanel>
        <TabPanel value="3">
          {comedyBooks.map((item) => (
            <li key={item.id}>{item.bookName}</li>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
