# PowerShell script to copy media files to public folder

Write-Host "Setting up media files..." -ForegroundColor Green

# Create directories if they don't exist
$portfolioDir = "public\portfolio"
$videoDir = "public\video"

if (!(Test-Path $portfolioDir)) {
    New-Item -ItemType Directory -Path $portfolioDir | Out-Null
    Write-Host "Created $portfolioDir directory" -ForegroundColor Yellow
}

if (!(Test-Path $videoDir)) {
    New-Item -ItemType Directory -Path $videoDir | Out-Null
    Write-Host "Created $videoDir directory" -ForegroundColor Yellow
}

# Copy portfolio images
$sourcePortfolio = "..\negu\*.jpg"
if (Test-Path $sourcePortfolio) {
    Copy-Item -Path $sourcePortfolio -Destination $portfolioDir -Force
    $imageCount = (Get-ChildItem $portfolioDir -Filter "*.jpg").Count
    Write-Host "Copied $imageCount portfolio images" -ForegroundColor Green
} else {
    Write-Host "Warning: Portfolio images not found at $sourcePortfolio" -ForegroundColor Red
}

# Copy video file (using the first video found)
$sourceVideo = "..\negu\vidéo\*.mp4"
$videoFiles = Get-ChildItem -Path "..\negu\vidéo" -Filter "*.mp4" -ErrorAction SilentlyContinue

if ($videoFiles.Count -gt 0) {
    $firstVideo = $videoFiles[0]
    Copy-Item -Path $firstVideo.FullName -Destination "$videoDir\showcase.mp4" -Force
    Write-Host "Copied video file: $($firstVideo.Name) -> showcase.mp4" -ForegroundColor Green
} else {
    Write-Host "Warning: Video files not found" -ForegroundColor Red
}

Write-Host "`nMedia setup complete!" -ForegroundColor Green
Write-Host "You can now run: npm install && npm run dev" -ForegroundColor Cyan
