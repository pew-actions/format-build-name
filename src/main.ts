import * as core from '@actions/core'

async function run() : Promise<void> {

  try {

    // validate inputs
    var template = core.getInput('template')
    const buildConfiguration = core.getInput('build-configuration')
    const platform = core.getInput('platform')
    if (!template) {
      throw new Error('No template supplied to the action')
    } else if (!buildConfiguration) {
      throw new Error('No build-configuration supplied to the action')
    } else if (!platform) {
      throw new Error('No platform supplied to the action')
    }

    template = template.replace('{configuration}', buildConfiguration.toUpperCase())
    template = template.replace('{platform}', platform.toUpperCase())

    core.setOutput('name', template)

  } catch (err: any) {
    if (err instanceof Error) {
      const error = err as Error
      core.setFailed(err.message)
    } else {
      throw err
    }
  }
}

run()
