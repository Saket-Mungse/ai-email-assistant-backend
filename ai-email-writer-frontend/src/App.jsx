import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, 
         MenuItem, Select, FormControl, InputLabel, 
         CircularProgress, Alert } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!emailContent.trim()) {
      setError('Please enter the email content.');
      return;
    }
    setLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await fetch('http://localhost:8080/api/email/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailContent, toneOfReply: tone }),
      });
      if (!response.ok) throw new Error('Failed to generate reply.');
      const data = await response.text();
      setGeneratedReply(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Tone of Reply</InputLabel>
          <Select
            value={tone} 
            label="Tone of Reply"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="apologetic">Apologetic</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={loading}
        sx={{ mb: 3 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
      </Button>

      {generatedReply && (
        <Box>
          <TextField
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            label="Generated Reply"
            value={generatedReply}
            onChange={(e) => setGeneratedReply(e.target.value)}
          />
          <Button
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;