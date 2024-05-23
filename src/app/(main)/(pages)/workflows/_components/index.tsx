import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-credits'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
        <Workflow 
            description='Creating a test workflow'
            id="e23498fj23948n"
            name="Automation Workflow"
            publish={false}
            />
         {workflows?.length ? (
          workflows.map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  )
}

export default Workflows