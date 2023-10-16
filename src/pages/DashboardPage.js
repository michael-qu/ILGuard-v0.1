const DashboardPage = () => {
    const contents = [
        {
            pool: 'ETH-USDT',
            platform: 'Sushi',
            value: '$1245.34',
            autoRebalance: false
        },
        {
            pool: 'WBTC-BNB',
            platform: 'Pancakeswap',
            value: '$699.01',
            autoRebalance: true
        },
        {
            pool: 'UNI-ETH',
            platform: 'Uniswap',
            value: '$15002.99',
            autoRebalance: true
        },
        {
            pool: 'LDO-MATIC',
            platform: 'Quickswap',
            value: '$3445.35',
            autoRebalance: false
        }
    ];
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Pool</th>
                    <th>Platform</th>
                    <th>Value</th>
                    <th>Auto Re-balance</th>
                </tr>
                </thead>
                <tbody>
                {
                    contents.map((content) => {
                        return (
                            <tr key={content.pool}>
                                <td>{content.pool}</td>
                                <td>{content.platform}</td>
                                <td>{content.value}</td>
                                <td>{content.autoRebalance}</td>
                                {/* <td><img width="140px" src={nft.image} alt={nft.name}/></td> */}
                            </tr>
                        );
                    })

                }
                </tbody>
            </table>

        </div>
    );
}

export default DashboardPage;