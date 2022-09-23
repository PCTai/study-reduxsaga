import { Box, Grid, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { ChatBubble, ChatRounded, LinearScaleSharp, PeopleAlt } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatisticItem from "./components/StatisticItem";
import Widget from "./components/Widget";
import StudentRankingList from "./components/StudentRankingList";
import {selectCityListMap } from '../city/citySlice';
import {
    dashboardActions,
    selectDashboardLoading,
    selectDashboardStatistics,
    selectHighestStudentList,
    selectLowestStudentList,
    selectRankingByCityList,
  } from './dashboardSlice';
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
      position: 'relative',
    },
  
    loading: {
      position: 'absolute',
      top: theme.spacing(-1),
      width: '100%',
    },
  }));
function Dashboard() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const loading = useSelector(selectDashboardLoading);
    const statistics = useSelector(selectDashboardStatistics);
    const highestStudentList = useSelector(selectHighestStudentList);
    const lowestStudentList = useSelector(selectLowestStudentList);
    const rankingByCityList = useSelector(selectRankingByCityList);
    const cityMap = useSelector(selectCityListMap);
    console.log(rankingByCityList);

    useEffect(() => {
        dispatch(dashboardActions.fetchData());
    }, [dispatch]);
    return ( <>
    <Box className={classes.root}>
      {/* Loading */}
      {loading && <LinearProgress className={classes.loading} />}

      {/* Statistic Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatRounded fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatBubble fontSize="large" color="primary" />}
            label="mark >= 8"
            value={statistics.highMarkCount}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<LinearScaleSharp fontSize="large" color="primary" />}
            label="mark <= 5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>

      {/* All students rankings */}
      <Box mt={5}>
        <Typography variant="h4">All Students</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title="Student with highest mark">
                <StudentRankingList studentList={highestStudentList} />
              </Widget>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Widget title="Student with lowest mark">
                <StudentRankingList studentList={lowestStudentList} />
              </Widget>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Rankings by city */}
      <Box mt={5}>
        <Typography variant="h4">Rankings by city</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            {rankingByCityList.map((ranking) => (
              <Grid key={ranking.cityId} item xs={12} md={6} lg={3}>
                <Widget title={cityMap[ranking.cityId]}>
                  <StudentRankingList studentList={ranking.rankingList} />
                </Widget>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
    </> );
}

export default Dashboard;