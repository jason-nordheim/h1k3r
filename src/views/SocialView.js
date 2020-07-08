import React, { useState } from 'react'
import { MobileLayout } from "../components/layout/DefaultLayout";
import { Paper, Tab } from '@material-ui/core'
import { CustomTab, CustomTabs } from "../components/CustomTabs";
import AddIcon from '@material-ui/icons/Add';

export const MobileSocialView = props => {
  const [tab, setTab] = useState(0);

  return (
    <MobileLayout>
      <Paper square>
        <CustomTabs
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
          variant="fullWidth"
          indicatorColor={"green"}
        >
          <CustomTab label="H1k3r Community" />
          <CustomTab label="My Connections" />
          <CustomTab  icon={ <AddIcon /> } /> 
        </CustomTabs>
      </Paper>
    </MobileLayout>
  );
}
