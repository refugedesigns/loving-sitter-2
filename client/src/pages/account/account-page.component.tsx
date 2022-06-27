import React from 'react'

import { Tabs, Tab, Box, Container } from "@mui/material"
import ProfileTabPanel from "../../components/ui/profile-tab.components"
import withLayout from "../../components/hoc/layout-wrapper.component"
import EditProfile from '../../components/account/edit-profile/edit-profile.component';



function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}


const AccountPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "80vh",
        marginTop: "40px",
      }}
      maxWidth="md"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="profile tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          className="whitespace-nowrap"
          label="Edit Profile"
          {...a11yProps(0)}
        />
        <Tab
          className="whitespace-nowrap"
          label="Profile Photo"
          {...a11yProps(1)}
        />
        <Tab
          className="whitespace-nowrap"
          label="Availability"
          {...a11yProps(2)}
        />
        <Tab className="whitespace-nowrap" label="Image Gallery" {...a11yProps(3)} />
        <Tab className="whitespace-nowrap" label="Security" {...a11yProps(4)} />
        <Tab className="whitespace-nowrap" label="Settings" {...a11yProps(5)} />
       
      </Tabs>
      <ProfileTabPanel value={value} index={0}>
        <EditProfile />
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={1}>
        Item Two
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={2}>
        Item Three
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={3}>
        Item Four
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={4}>
        Item Five
      </ProfileTabPanel>
      <ProfileTabPanel value={value} index={5}>
        Item Six
      </ProfileTabPanel>
    </Container>
  );
}

export default withLayout(AccountPage)