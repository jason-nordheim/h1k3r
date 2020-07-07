import React, { useState } from 'react'
import { MobileLayout } from '../layouts/DefaultLayout'
import { Paper } from '@material-ui/core'
import { CustomTab, CustomTabs } from '../components/CustomTabs'

export const MobileEventsView = props => {
  const [tab, setTab] = useState(0)
  return (
    <MobileLayout>
      <Paper square>
        <CustomTabs
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
          variant="fullWidth"
          indicatorColor={"green"}
        >
          <CustomTab label="My Events" />
          <CustomTab label="Invites" />
        </CustomTabs>
      </Paper>
    </MobileLayout>
  );
}




