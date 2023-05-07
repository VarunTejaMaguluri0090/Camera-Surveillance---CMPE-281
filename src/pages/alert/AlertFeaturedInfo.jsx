import { CameraAlt, AddAlert, Build, CameraAltRounded, ReportOutlined, ReportOffRounded, Report, BarChartRounded, BarChart, AddAlertOutlined, Schedule } from "@material-ui/icons";
import "./AlertFeaturedInfo.css"
import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';

import {
    Avatar,
    Box,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    SvgIcon,
    Typography
  } from '@mui/material';

  export const AlertFeaturedInfo = (props) => {
    const { sx, value} = props;
  return (
    <div className="Featured1">
        <div className="FeaturedItem1">
        <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Number of Alerts
            </Typography>
            <Typography variant="h4">
              {value}74
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 49,
              width: 49
            }}
          >
            <SvgIcon>
              <AddAlert />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
    </div>
    
    

    <div className="FeaturedItem1">
        <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Active Alerts
            </Typography>
            <Typography variant="h4">
              {value}30
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 52,
              width: 52
            }}
          >
            <SvgIcon>
            <AddAlert />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
    </div>
    <div className="FeaturedItem1">
        <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
         Reviewed Alerts
            </Typography>
            <Typography variant="h4">
              {value}36
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
            <AddAlert />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
    </div>
    <div className="FeaturedItem1">
        <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
        False Alerts
            </Typography>
            <Typography variant="h4">
              {value}8
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
            <AddAlert />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
    </div>
    
    </div>
  );
}
