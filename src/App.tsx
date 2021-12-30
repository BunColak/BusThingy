import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import mappings from "./mappings.json";
import { ExpandMore as ExpandMoreIcon, Send } from "@mui/icons-material";
const cp = require("child_process");

const App = () => {
  const openFile = async (file: string) => {
    const child = cp.execFile(file, [], (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.log(error, stderr);

        throw error;
      }
      console.log(stdout);
    });
    console.log(child);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar color="primary">
          <Typography variant="h5">Airbus Thingy</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          {mappings.map((mapping) => (
            <Accordion key={mapping.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{mapping.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {mapping.lessons.map((lesson) => (
                    <ListItem button onClick={() => openFile(lesson.path)}>
                      <ListItemText
                        primary={lesson.name}
                        secondary="something here"
                      />
                      <Send color="action" />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
