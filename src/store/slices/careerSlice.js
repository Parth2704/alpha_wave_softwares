import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  jobs: [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for a skilled Full Stack Developer to join our dynamic team.',
      requirements: ['React/Angular', 'Node.js', 'Database management', 'Cloud platforms']
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'On-site',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our infrastructure team to help scale our applications.',
      requirements: ['Docker/Kubernetes', 'AWS/Azure', 'CI/CD pipelines', 'Monitoring tools']
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create amazing user experiences for our clients.',
      requirements: ['Figma/Sketch', 'Prototyping', 'User research', 'Design systems']
    }
  ],
  applications: [],
  loading: false,
  error: null,
};

export const submitApplication = createAsyncThunk(
  'career/submitApplication',
  async (application) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return application;
  }
);

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to submit application';
      });
  },
});

export default careerSlice.reducer;
