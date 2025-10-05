"use client";

import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function NotesPage() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.paper",
        p: 3,
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Untitled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              fontSize: "2rem",
              fontWeight: 600,
              padding: "8px 0",
            },
          }}
        />

        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Start typing..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
              padding: 0,
            },
            "& .MuiInputBase-input": {
              fontSize: "1rem",
              lineHeight: 1.7,
              padding: "8px 0",
            },
          }}
        />
      </Box>
    </Box>
  );
}
