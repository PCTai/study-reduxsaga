import { Box, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import TableListStudent from '../components/TableListStudent';
import { selectStudenLoading, selectStudentList, studentActions } from '../studentSlice';
import {cityActions, selectCityList, selectCityListMap } from '../../city/citySlice';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },

  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: theme.spacing(4),
  },

  loading: {
    position: 'absolute',
    top: theme.spacing(-1),
    width: '100%',
  },
}));

export default function ListPage() {
    const match = useRouteMatch();
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    
    
    const studentList = useSelector(selectStudentList);
    //   const pagination = useSelector(selectStudentPagination);
    //   const filter = useSelector(selectStudentFilter);
    const loading = useSelector(selectStudenLoading);
    //   const cityMap = useSelector(selectCityMap);
    const cityList = useSelector(selectCityList);
    const cityMap = useSelector(selectCityListMap);
   
    useEffect(() => {
        dispatch(
        studentActions.fetchStudentList({
            _page: 1,
            _limit: 15,
        })
        );
        dispatch(cityActions.fecthCityList())
    }, [dispatch]);
 
//   useEffect(() => {
//     dispatch(studentActions.fetchStudentList(filter));
//   }, [dispatch, filter]);

//   const handlePageChange = (e: any, page: number) => {
//     dispatch(
//       studentActions.setFilter({
//         ...filter,
//         _page: page,
//       })
//     );
//   };

//   const handleSearchChange = (newFilter: ListParams) => {
//     dispatch(studentActions.setFilterWithDebounce(newFilter));
//   };

//   const handleFilterChange = (newFilter: ListParams) => {
//     dispatch(studentActions.setFilter(newFilter));
//   };

//   const handleRemoveStudent = async (student: Student) => {
//     try {
//       // Remove student API
//       await studentApi.remove(student?.id || '');

//       toast.success('Remove student successfully!');

//       // Trigger to re-fetch student list with current filter
//       const newFilter = { ...filter };
//       dispatch(studentActions.setFilter(newFilter));
//     } catch (error) {
//       // Toast error
//       console.log('Failed to fetch student', error);
//     }
//   };

//   const handleEditStudent = async (student: Student) => {
//     history.push(`${match.url}/${student.id}`);
//   };

  return (
    <Box className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}

      {/* <Box className={classes.titleContainer}>
        <Typography variant="h4">Students</Typography>

        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add new student
          </Button>
        </Link>
      </Box> */}

      {/* <Box mb={3}>
        <StudentFilters
          filter={filter}
          cityList={cityList}
          onChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </Box> */}

      <TableListStudent
        studentList={studentList}
        cityMap={cityMap}
        // onEdit={handleEditStudent}
        // onRemove={handleRemoveStudent}
      />

      {/* <Box my={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
        />
      </Box> */}
    </Box>
  );
}