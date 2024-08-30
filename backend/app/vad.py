from pydub import AudioSegment
from pydub.silence import detect_silence

def perform_vad(file_path):
    audio = AudioSegment.from_file(file_path)
    
    # Detect silence in the audio file
    silence_ranges = detect_silence(audio, min_silence_len=500, silence_thresh=-40)
    
    # Convert silence_ranges to timestamps in milliseconds
    silence_timestamps = [(start, end) for start, end in silence_ranges]
    
    return silence_timestamps
