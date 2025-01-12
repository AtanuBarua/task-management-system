"use client";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useState } from "react";
import MainLayout from "./MainLayout";

const Home = () => {
  const [totalProjects, setTotalProjects] = useState(100);
  const [pendingTasks, setPendingTasks] = useState(30);
  const [inProgressTasks, setInProgressTasks] = useState(45);
  const [completedTasks, setCompletedTasks] = useState(25);

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Welcome to the Dashboard</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Projects
              </Typography>
              <Typography variant="h4">{totalProjects}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Pending Tasks
              </Typography>
              <Typography variant="h4">{pendingTasks}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                In Progress Tasks
              </Typography>
              <Typography variant="h4">{inProgressTasks}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Completed Tasks
              </Typography>
              <Typography variant="h4">{completedTasks}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
