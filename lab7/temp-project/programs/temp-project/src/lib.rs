use anchor_lang::prelude::*;

declare_id!("96AgWVgkMXQxNQYSnXe6iF1dWaQU53oqApkPcHbENKdS");

#[program]
pub mod temp_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
