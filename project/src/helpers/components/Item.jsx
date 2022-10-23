const Item = ( {title, emoji, keywords} ) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(emoji);
    }

    return (
        <article className="card-emoji">
            {/* <p className="emoji-icon">{emoji}</p>
            <h4>{title}</h4> */}
            <div class="emoji-card" id="card">
			    <div class="symbol"
                onClick={handleCopy}>
                    {emoji}
                </div>
                <div class="title">
                    {title}
                </div>
                <div class="keywords">
                    {keywords}
                </div>
            </div>
        </article>
    );
}

export default Item;