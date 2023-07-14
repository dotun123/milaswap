import { ConnectButton } from '@rainbow-me/rainbowkit';

export const ConnectButtonComp = () => {
  return (
  
    <ConnectButton.Custom >
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div id="button-connect-wallet"
style={{  alignItems:"center",alignContent:"center", width:"450px",border:"1px",height:"70px", fontSize:"18px",borderRadius:"40px", padding:"0.7rem",textAlign:"center" }} 
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'flex', alignItems: 'center'
                            
              },
            })}
          >
          { (() => {
              
            if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",textAlign:"center" }} >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
               
                return (
                  <button onClick={openChainModal} type="button" style={{fontWeight:700, alignContent:"center",textAlign:"center",alignItems:"center",width:"100%" }}>
                    Wrong network
                  </button>
                
                );
              }

              return (
               
                <div style={{ display: 'flex', gap: 12 }} >
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                         
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                       
                      </div>
                     
                    )}
                   {chain.name}
                    
                  </button>

                  <button onClick={openAccountModal} type="button" style={{fontWeight:500, alignContent:"center",textAlign:"center",alignItems:"center",width:"90%"}}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              
              );
            })()}
          </div>
         
        );
      }}
    </ConnectButton.Custom> 

  )
}
