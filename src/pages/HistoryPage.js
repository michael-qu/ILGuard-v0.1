const HistoryPage = () => {
    const contents = [
        {
            pool: 'ETH-USDT',
            date: '05.10.2023',
            value: '',
            rbValue: ''
        },
        {
            pool: 'WBTC-BNB',
            date: '05.10.2023',
            value: '',
            rbValue: ''
        },
        {
            pool: 'UNI-ETH',
            date: '05.10.2023',
            value: '',
            rbValue: ''
        },
        {
            pool: 'LDO-MATIC',
            date: '05.10.2023',
            value: '',
            rbValue: ''
        }
    ];
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Pool</th>
                    <th>Date</th>
                    <th>Value</th>
                    <th>RB Value</th>
                </tr>
                </thead>
                <tbody>
                {
                    contents.map((content) => {
                        return (
                            <tr key={content.pool}>
                                <td>{content.pool}</td>
                                <td>{content.date}</td>
                                <td>{content.value}</td>
                                <td>{content.rbValue}</td>
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

export default HistoryPage;