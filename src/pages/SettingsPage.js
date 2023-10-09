const SettingsPage = () => {
    return (
        <div>
            <h3>Autorebalance</h3>
            <p>This is an automated feature that rebalances the user's portfolio to either maximize returns or mitigate risks on specific predefined metrics or conditions.
                It operates with a fixed threshold of 3.35%.
            </p>
            <h3>Date</h3>
            <p>A setting enabling users to choose whether they wish to receive push notifications from the app concerning various events,
                such as threshold achievements, rebalancing notifications, and the like.
            </p>
            <h3>Pro Mode (soon)</h3>
            <p>A mode designed for advanced users, allowing them to manually adjust threshold values for vairous parameters such as returns, risks, and more.
                This mode can be especially beneficial for users wanting greater control over their invenstments.
            </p>

        </div>
    );
}

export default SettingsPage;