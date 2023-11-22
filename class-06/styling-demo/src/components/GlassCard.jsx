import styles from './GlassCard.module.css'

export default function GlassCard() {
    return (
        <div className={`${styles.glasscard} ${styles.glasseffect}`}>
            <h2 className='text-blue-500'>Animals facts</h2>
            <p><strong>Animals:</strong>Husky</p>
            <p><strong>Fact 1:</strong>They are loud</p>
            <p><strong>Work History:</strong>Huskies were developed as working sled dogs</p>
            <p><strong>Life and Death</strong>The average lifespan is 12-15 years</p>
        </div>
    )
}