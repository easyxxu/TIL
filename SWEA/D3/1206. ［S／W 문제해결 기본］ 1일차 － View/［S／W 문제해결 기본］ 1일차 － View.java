import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
    public static void main(String[] args) throws IOException {
        //System.setIn(new FileInputStream("src/swea/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        for(int tc=1; tc<=10; tc++) {
            int N = Integer.parseInt(br.readLine()); // 건물의 개수
            String buildingAll = br.readLine();
            st = new StringTokenizer(buildingAll);
            int cnt = 0;
            int[][] arr = new int[N][255]; // 배열 크기를 [N][255]로 수정
            
            for(int i=0;i<N;i++) {
                int height = Integer.parseInt(st.nextToken());
                for(int j = 0; j < height; j++) {
                    arr[i][j] = 1; 
                }
            }

            for(int i=2;i<N-2;i++) { // 배열 인덱스 범위 수정
                for(int j=0;j<255;j++) {
                    if(arr[i][j] == 1 && arr[i-1][j] == 0 && arr[i-2][j] == 0 && arr[i+1][j] == 0 && arr[i+2][j]==0) {
                         cnt++;
                    }
                }
            }
            System.out.printf("#%d %d\n", tc, cnt); // 출력 포맷 수정
        }
    }
}
